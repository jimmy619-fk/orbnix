import React from 'react'
import Table from 'react-bootstrap/Table'
export default function SubnetTable() {
    return (
        <div className='overflow-x-scroll flex flex-col mb-[100px]'>
            <div className='text-[20px] font-[500px] text-white'>
                <p>Subnets</p>
            </div>
            <div class="w-[200%] md:w-auto overflow-x-scroll">
                <Table class='bg-transparent ' responsive bordered striped hover>
                    <thead>
                        <tr className='text-[#636363]'>
                            <th style={{ padding: '10px' }}>ID</th>
                            <th style={{ padding: '10px' }}>Name</th>
                            <th style={{ padding: '10px' }}>Created At</th>
                            <th style={{ padding: '10px' }}>Owner</th>
                            <th className='' style={{ color: '#00DBBC', padding: '10px' }}>
                                Emission
                                <span className="arrow-down" style={{ color: '#00DBBC', marginLeft: '5px' }}>
                                    &#9660;
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-[#CACACA]'>
                            <td style={{ padding: '10px' }}>1</td>
                            <td style={{ padding: '10px' }}>Time Series Prediction</td>
                            <td style={{ padding: '10px' }}>Oct 12, 2023</td>
                            <td className='text-[#767676]' style={{ padding: '10px' }}>5esfr297ga..</td>
                            <td style={{ padding: '10px' }}>9.58%</td>
                        </tr>
                        <tr className='text-[#CACACA]'>
                            <td style={{ padding: '10px' }}>2</td>
                            <td style={{ padding: '10px' }}>hired@</td>
                            <td style={{ padding: '10px' }}>Oct 12, 2023</td>
                            <td className='text-[#767676]' style={{ padding: '10px' }}>5esfr297ga..</td>
                            <td style={{ padding: '10px' }}>9.58%</td>
                        </tr>
                        <tr className='text-[#CACACA]'>
                            <td style={{ padding: '10px' }}>2</td>
                            <td style={{ padding: '10px' }}>hired@</td>
                            <td style={{ padding: '10px' }}>Oct 12, 2023</td>
                            <td className='text-[#767676]' style={{ padding: '10px' }}>5esfr297ga..</td>
                            <td style={{ padding: '10px' }}>9.58%</td>
                        </tr>
                        <tr className='text-[#CACACA]'>
                            <td style={{ padding: '10px' }}>2</td>
                            <td style={{ padding: '10px' }}>hired@</td>
                            <td style={{ padding: '10px' }}>Oct 12, 2023</td>
                            <td className='text-[#767676]' style={{ padding: '10px' }}>5esfr297ga..</td>
                            <td style={{ padding: '10px' }}>9.58%</td>
                        </tr>
                        <tr className='text-[#CACACA]'>
                            <td style={{ padding: '10px' }}>2</td>
                            <td style={{ padding: '10px' }}>hired@</td>
                            <td style={{ padding: '10px' }}>Oct 12, 2023</td>
                            <td className='text-[#767676]' style={{ padding: '10px' }}>5esfr297ga..</td>
                            <td style={{ padding: '10px' }}>9.58%</td>
                        </tr>
                    </tbody>
                </Table >
            </div >
        </div >
    )
}
