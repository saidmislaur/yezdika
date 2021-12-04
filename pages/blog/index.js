import React from 'react';
import dynamic from 'next/dynamic'

class Editor extends React.Component {

    render(){
        let RedactorSSRSafe = dynamic(import('../../components/Editor/Editor'), {
            ssr: false
        });
        return (<RedactorSSRSafe/>);
    }
}

 
export default Editor;