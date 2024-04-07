import React from 'react'
import Header from '../Header/Header'
import Graph from '../Graph/Graph'
import GraphData from '../GraphData/GraphData'
import Mobilerightcards from '../Mobilerightcards/Mobilerightcards'
import SubnetTable from '../SubnetTable/SubnetTable'
import ValidatorsTable from '../ValidatorsTable/ValidatorsTable'

export default function LandingGraph() {
    return (
        <div className='flex flex-col overflow-hidden  bg-[#161616] '>
            <Header />
            <div className='flex flex-col'>
                <Graph />
                <GraphData />
                {/* movile right cards */}
                <Mobilerightcards />
            </div>
            {/* subnet, validator tables */}
            <div className='mt-[25px] mx-[20px] xl:mx-[40px] grid lg:grid-cols-2'>
                <SubnetTable />
                <ValidatorsTable />

            </div>


        </div>
    )
}
