import React from 'react'

export default function Skills () {
    return (
        <>
            <h2>My Skills</h2>
            <table className='table'>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                        <th scope="col">Front End</th>
                        <th scope="col">Back End</th>
                        <th scope="col">Developer Tools</th>
                        <th scope="col">Other Software Tools</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                        <td>HTML</td>
                        <td>CSS</td>
                        <td>JavaScript</td>
                        <td>React</td>
                        <td>JQuery</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                        <td>NodeJS</td>
                        <td>HandleBars</td>
                        <td>WebPack</td>
                        <td>Sequel</td>
                        <td>Sequetdze</td>
                        <td>MongoDB</td>
                        <td>Mongoose</td>
                        <td>GraphQL with Apollo</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                        <td>Git/GitHub</td>
                        <td>Heroku</td>
                        <td>Postman</td>
                        <td>VSCode</td>
                    </tr>

                    <tr>
                    <th scope="row">4</th>
                        <td>Smartsheet</td>
                        <td>Salesforce</td>
                        <td>JIRA</td>
                        
                    </tr>
                </tbody>
            </table>
        </>
    )
}