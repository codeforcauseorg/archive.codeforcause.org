import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
 
export class UserEdit extends React.Component {
 
    state = {
        email: '',
    }
 
    handleChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }
 
    handleSubmit = () => {
        // your submit logic
    }
 
    render() {
        const { email } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Email"
                    variant="outlined"
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    validators={['required']}
                    errorMessages={['This is a required field']}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm>
        );
    }
}
