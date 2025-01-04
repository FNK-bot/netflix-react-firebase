import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../request'
import axios from 'axios'

const Home = () => {

    return (
        <div>
            <Main />
            <Row title={"Popular"} fetchUrl={requests.requestPopular} rowId={1} />
            <Row title={"Horror"} fetchUrl={requests.requestHorror} rowId={2} />
            <Row title={"Top Rated"} fetchUrl={requests.requestTopRated} rowId={3} />
            <Row title={"Trending"} fetchUrl={requests.requestTrending} rowId={4} />
            <Row title={"Upcoming"} fetchUrl={requests.requestUpcoming} rowId={5} />

        </div>
    )
}

export default Home
