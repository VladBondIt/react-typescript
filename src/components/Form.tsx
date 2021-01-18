import React, { Component } from 'react';

class Form extends Component {

    handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.currentTarget);
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted!');
    }

    handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
        console.log('Coppied!');
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <label>
                    Simple text:
                    <input
                        onCopy={this.handleCopy}
                        onFocus={this.handleFocus}
                        type="text"
                        name="text"
                    />
                </label>
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;