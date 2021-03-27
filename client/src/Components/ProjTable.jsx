import React from 'react';
import { IconButton } from "@material-ui/core";
import { ImGithub } from 'react-icons/im';
import { BiLinkExternal } from 'react-icons/bi';
import Slideshow from './Slideshow';
import '../Stylesheets/ProjTable.css'

const ProjTable = ({tableInfo}) => {

    return (
        <div>
        {tableInfo.map((info, infoIndex) => {
              return (
                <div className='proj' key={infoIndex}>
                    <table>
                        <tbody>
                            <tr>
                                <th className='titleCell' colSpan={1}>{info.name}</th>
                            </tr>

                            <tr>
                                <td className='imgContainer' rowSpan={3} ><Slideshow slideName={info.name} autoPlay={false}/></td>
                                <td className='textCell'>{info.description}</td>
                            </tr>

                            <tr className='techRow'>
                                <td>{info.tech.map((techText, techIndex) => 
                                    <p className='techCell' key={techIndex}>
                                    {techIndex === info.tech.length-1 ? techText : techText + ' | '}
                                    </p>
                                )}
                                </td>          
                            </tr>

                            <tr className='linkRow'>
                                <td>
                                    <IconButton href={info.githubLink} target="_blank" rel="noopener noreferrer">
                                        <ImGithub/>
                                    </IconButton>

                                    {info.otherLink !== undefined &&
                                    <IconButton href={info.otherLink} target="_blank" rel="noopener noreferrer">
                                        <BiLinkExternal/>
                                    </IconButton>}
                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        })}
        </div>
    );
};
  
  export default ProjTable;