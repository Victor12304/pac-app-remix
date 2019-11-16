import React from 'react';

export default class Form extends React.Component {
    render() {
        return(
            <form>
                {
                    this.props.fields.map((field, index) => {
                        return <input key={index} type={field.type} name={field.name} id={field.id} placeholder={field.placeholder} onChange={field.handleChange}/>
                    })
                }
                <button type="submit">{this.props.btnLabel}</button>
            </form>
        )
    }
}