//Alex Cassell
//http://alexcassell.com
//questions

import React from 'react';
import { Input } from 'semantic-ui-react';
import { v4 } from 'uuid';


class Questions extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            questions: [{ name: '' }],
    };
    }

    handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
    }

    handleQuestionNameChange = (idx) => (evt) => {
    const newquestions = this.state.questions.map((question, sidx) => {
        if (idx !== sidx) return question;
        console.log(evt.target.name);
        return { ...question, name: evt.target.value };

    });

    this.setState({ questions: newquestions });
    }

    handleSubmit = (evt) => {
    const { name, questions } = this.state;
    }

    handleAddQuestion = () => {
    this.setState({ questions: this.state.questions.concat([{ name: '' }]) });
    }

    handleRemoveQuestion = (idx) => () => {
    this.setState({ questions: this.state.questions.filter((s, sidx) => idx !== sidx) });
    }

    handleInput(e){
        console.log("e.target.name");
    }

    //create random name for form when created
    //add to array with name
    //delete from array when name is deleted ?
    //use loop to find within array if nessacery


    render() {
    return (
        <form className="conversations__questions" onSubmit={this.handleSubmit}>
        Questions

        {this.state.questions.map((question, idx) => (
            <div className="question">
            <Input
                type="text"
                placeholder={`Type a question`}
                value={question.name}
                name = "test"
                onChange={this.handleQuestionNameChange(idx) }
                // onChange={(e) => this.handleInput(e)}
            />
            <button type="button" onClick={this.handleRemoveQuestion(idx)} className="small">-</button>
            </div>
        ))}
        <button type="button" onClick={this.handleAddQuestion} className="small">Add Question</button>
        </form>
    )
    }
}

export default Questions;