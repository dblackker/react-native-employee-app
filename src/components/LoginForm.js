import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    render() {
        console.log(this.props);

        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={this.onEmailChanged.bind(this)}
                        label='Email'
                        placeholder='email@gmail.com'
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        onChangeText={this.onPasswordChanged.bind(this)}
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                    >
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);

    return {
        ...ownProps,
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
