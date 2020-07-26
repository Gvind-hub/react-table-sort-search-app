import React, {Component} from 'react';
import axios from "axios";
import _ from "lodash"

import Table from "./components/Table/Table";
import InitApp from "./components/InitApp/InitApp";
import Loader from "./components/Loader/Loader";
import Paginator from "./components/Pagination/Paginator";
import AddForm from "./components/AddForm/AddForm";
import Search from "./components/Search/Search";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";


class App extends Component {

    state = {
        selectedUser: '',
        filteredData: 'none',
        init: false,
        isFetching: false,
        addPopVisible: false,
        data: [],
        sortedField: '',
        sortType: 'desc',
        currentPage: 1,
        itemsCountPerPage: 32,
        smallDataURL: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
        bigDataURL: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
    };

    fetchData = async (URL) => {
        try {
            this.setState({isFetching: true});
            const {data} = await axios.get(URL);
            this.setState({data});
            this.setState({init: true});
            this.setState({isFetching: false});
        } catch (error) {
            console.log(error)
        }
    };

    sortData = sortedField => {
        const copyData = this.state.data.concat();
        const sortType = this.state.sortType === 'asc' ? 'desc' : 'asc';
        const sortedData = _.orderBy(copyData, sortedField, sortType);
        if (this.state.filteredData !== 'none') {
            const copyFiltered = this.state.filteredData.concat();
            const sortedFilteredData = _.orderBy(copyFiltered, sortedField, sortType);
            this.setState({
                filteredData: sortedFilteredData,
                selectedUser: ''
            })
        }
        this.setState({
            sortedField,
            sortType,
            data: sortedData,
            selectedUser: ''
        })
    };

    filterData = text => {
        if (text) {
            const filteredData = this.state.data.filter(item => {
                if (item.firstName.toLowerCase().includes(text)
                    || item.lastName.toLowerCase().includes(text)
                    || item.email.toLowerCase().includes(text)
                    || item.id.toString().includes(text)
                    || item.phone.includes(text)
                ) {
                    return item
                }
                return ''
            });
            this.setState({
                filteredData,
                selectedUser: ''
            })
        } else {
            this.setState({
                filteredData: 'none'
            })
        }

    };

    handlePageChange = page => {
        this.setState({
            currentPage: page,
            selectedUser: ''
        })
    };

    handleAddClick = () => {
        this.setState({
            addPopVisible: true,
        })
    };

    handleClosePop = () => {
        this.setState({
            addPopVisible: false,
        })
    };

    onSubmitAddForm = (data, e) => {
        this.setState({
            data: [data, ...this.state.data]
        });
        this.handleClosePop();
        e.target.reset()
    };

    onSelect = index => {
        this.setState({
            selectedUser: index
        });
    };

    chunkData = data => _.chunk(data, this.state.itemsCountPerPage)[this.state.currentPage - 1]

    render() {
        if (!this.state.init) {
            return !this.state.isFetching ?
                <InitApp fetchData={this.fetchData} smallDataURL={this.state.smallDataURL} bigDataURL={this.state.bigDataURL}/> : <Loader/>
        }

        return (
            <div className="table-app">
                <div className="container">
                    <h1 className="table-app__title">users table app</h1>
                    <div className="wrapper-top">
                        <button className="table-app__add-elements" onClick={this.handleAddClick}>
                            <ion-icon className="table-app__add" name="add-circle-outline"/>
                            <span className="table-app__add-text">Add</span>
                        </button>

                        <AddForm handleClosePop={this.handleClosePop} addPopVisible={this.state.addPopVisible}
                                 onSubmitAddForm={this.onSubmitAddForm}/>

                        <Search filterData={this.filterData}/>
                    </div>

                    <Table data={
                        this.state.filteredData === 'none'
                            ? this.chunkData(this.state.data)
                            : this.chunkData(this.state.filteredData)
                    }
                           sortData={this.sortData} sortType={this.state.sortType} selectedUser={this.state.selectedUser}
                           sortedField={this.state.sortedField} onSelect={this.onSelect}/>

                    {this.state.filteredData === 'none' && this.state.data.length > this.state.itemsCountPerPage
                        ? <Paginator length={this.state.data.length} currentPage={this.state.currentPage}
                                     itemsCountPerPage={this.state.itemsCountPerPage} handlePageChange={this.handlePageChange}/>
                        : this.state.filteredData.length > this.state.itemsCountPerPage
                            ? <Paginator length={this.state.filteredData.length} currentPage={this.state.currentPage}
                                         itemsCountPerPage={this.state.itemsCountPerPage} handlePageChange={this.handlePageChange}/>
                            : ''
                    }

                    {this.state.selectedUser || this.state.selectedUser === 0
                        ? <PersonalInfo user={
                            this.state.filteredData === 'none'
                                ? this.chunkData(this.state.data)[this.state.selectedUser]
                                : this.chunkData(this.state.filteredData)[this.state.selectedUser]
                        }/> : ''
                    }

                </div>
            </div>
        );
    }
}

export default App;
