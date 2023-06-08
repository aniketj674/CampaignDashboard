import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "react-datepicker/dist/react-datepicker.css";
import FilterComponent from '../components/FilterComponent/index';
import PopUp from './PopUP';
import { Wrapper } from './Dashboard.style';

const url = 'https://jsonplaceholder.typicode.com/users';
const activeColor = "#a6e3a6c7";
const inActiveColor = "#ff0000a1";
const columnHeading = ['User Name', 'Start Date', 'End Date', 'Active', 'Budget (USD)'];
const initialCampaignsData = [
    {"id":1,"name":"Divavu","startDate":"9/19/2021","endDate":"3/9/2023","Budget":88377, "userId": 3},
    {"id":2,"name":"Jaxspan","startDate":"11/21/2023","endDate":"2/21/2024","Budget":608715, "userId": 6},
    {"id":3,"name":"Miboo","startDate":"11/1/2022","endDate":"6/20/2022","Budget":239507, "userId": 7},
    {"id":4,"name":"Trilith","startDate":"8/25/2022","endDate":"11/30/2022","Budget":179838, "userId": 1},
    {"id":5,"name":"Layo","startDate":"11/28/2017","endDate":"3/10/2023","Budget":837850, "userId": 9},
    {"id":6,"name":"Photojam","startDate":"7/25/2019","endDate":"6/23/2021","Budget":858131, "userId": 3},
    {"id":7,"name":"Blogtag","startDate":"6/27/2019","endDate":"1/15/2021","Budget":109078, "userId": 2},
    {"id":8,"name":"Rhyzio","startDate":"10/13/2020","endDate":"1/25/2022","Budget":272552, "userId": 4},
    {"id":9,"name":"Zoomcast","startDate":"9/6/2021","endDate":"11/10/2023","Budget":301919, "userId": 8},
    {"id":10,"name":"Realbridge","startDate":"3/5/2021","endDate":"10/2/2026","Budget":505602, "userId": 5}];

function Dashboard() {
    let storedData = JSON.parse(localStorage.getItem("campaignsData"));
    let allCampaignData = storedData ? storedData : initialCampaignsData;
    const [rows, setRows] = useState(allCampaignData);
    const [userData, setUserdata] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const [emptyTable, setEmptyTable] = useState(false);
    const startDate = useSelector(state => state.startDate);
    const endDate = useSelector(state => state.endDate);
    const searchedValue = useSelector(state => state.searchedValue);
    const today = new Date();

    
    window.AddCampaigns = function(value){
        allCampaignData = [...allCampaignData, ...value];
        localStorage.setItem("campaignsData", JSON.stringify(allCampaignData));
        setRows(allCampaignData);
    };

    function isCampaignActive(start,end) {
        let firstDate = Date.parse(start);
        let lastDate = Date.parse(end);
        return (today <= lastDate && today >= firstDate);
    }

    function getUsername(id){
        for (let user of userData) {
            if(user.id === id) {
                return user.name;
            }
        }
        return "Unknown User";
    }

    function filterCampaignData() {
        let filteredRows = allCampaignData;
        setEmptyTable(false);
        setShowPopUp(false);

        if(startDate && endDate) {
            filteredRows = filteredRows.filter((row) => {
                return ((Date.parse(row.startDate)>=startDate && Date.parse(row.startDate)<=endDate) || ((Date.parse(row.endDate)>=startDate && Date.parse(row.endDate)<=endDate)));
            });
        } else {
            if(startDate) {
                filteredRows = filteredRows.filter((row) => {
                    return (Date.parse(row.startDate)>=startDate);
                });
            }
            if(endDate) {
                filteredRows = filteredRows.filter((row) => {
                    return (Date.parse(row.endDate)<=endDate);
                });
            }
        }
        
        filteredRows = filteredRows.filter((row) => {
            return row.name.toLowerCase().includes(searchedValue.toLowerCase());
        });

        if((startDate && endDate) && (startDate > endDate)) {
            setShowPopUp(true);
            filteredRows = [];
        }

        setRows(filteredRows);
        if(filteredRows.length === 0){
            setEmptyTable(true);
        }
    }

    useEffect(()=>{
        filterCampaignData();
    },[startDate, endDate, searchedValue]);

    useEffect(()=>{
        async function fetchData(){
            let response = await fetch(url);
            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            setUserdata(await response.json());
        }
        fetchData();
    },[]);
   
    return(
        <Wrapper>
            <Typography align="center" variant="h1">Campaigns Data</Typography>
            <FilterComponent />
            <TableContainer component={Paper} sx={{ maxHeight: '100%' }}>
                <Table sx={{ minWidth: 650 }} aria-label="campaign table" size="medium" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            {columnHeading.map((heading) => (
                                <TableCell key={heading} align="center">{heading}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                        <TableBody>
                            {rows?.map((row) => (
                                <TableRow
                                    key={row?.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">{row?.name}</TableCell>
                                    <TableCell align="center">{getUsername(row?.userId)}</TableCell>
                                    <TableCell align="center">{row?.startDate}</TableCell>
                                    <TableCell align="center">{row?.endDate}</TableCell>
                                    <TableCell sx={{ "backgroundColor": isCampaignActive(row?.startDate,row?.endDate) ? activeColor : inActiveColor }} align="center">
                                        {isCampaignActive(row?.startDate,row?.endDate)?"Active":"Inactive"}
                                    </TableCell>
                                    <TableCell align="center">{row?.Budget}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                </Table>
            </TableContainer>
            {emptyTable && <Typography align="center" variant="subtitle1">No Records Found</Typography>}
            {showPopUp && <PopUp/>}
        </Wrapper>
    );
}

export default Dashboard;
