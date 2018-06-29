
import React from 'react';
import { Button } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';

class ResetPasswordForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
        };
        this.handlePassword = this.handlePassword.bind(this);
        this.handleRepeatPassword = this.handleRepeatPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        // custom rule will have name 'isPasswordMatch'
        Form.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.password) {
                return false;
            }
            return true;
        });
    }

    handlePassword(event) {
        const { user } = this.state;
        user.password = event.nativeEvent.text;
        this.setState({ user });
    }

    handleRepeatPassword(event) {
        const { user } = this.state;
        user.repeatPassword = event.nativeEvent.text;
        this.setState({ user });
    }

    submit() {
        // your submit logic
    }

    handleSubmit() {
        this.refs.form.submit();
    }

    render() {
        const { user } = this.state;

        return (
            <Form
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <TextValidator
                    name="password"
                    label="text"
                    secureTextEntry: true
                    validators={'required'}
                    errorMessages={'This field is required'}
                    type="text"
                    value={user.password}
                    onChange={this.handlePassword}
                />
                <TextValidator
                    name="repeatPassword"
                    label="text"
                    secureTextEntry: true
                    validators={'isPasswordMatch','required'}
                    errorMessages={'Password mismatch','This field is required'}
                    type="text"
                    value={user.repeatPassword}
                    onChange={this.handleRepeatPassword}
                />
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </Form>
        );
    }
