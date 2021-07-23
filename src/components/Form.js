import cuid from 'cuid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { createUser, updateUser } from '../redux/actions/usersActions';
import { useHistory } from 'react-router-dom';



const UserForm = () => {
  const selectedUser = useSelector((state) => state.user);
  

  var initialValues = selectedUser ?? {
    name: '',
    email: '',
    company: {
      name: ''
    },
    address: {
      city: ''
    }
  }
  const history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })

  }
  const handleNestedObjectsChange = (e, type) => {

    var {name,value} = e.target;
    
    var userValues = values;
    if (type === 'address') {
      let address = userValues.address;
      address[name] = value;
      userValues.address = address;


    } else if (type === 'company') {
      let company = userValues.company;
      company[name] = value;
      userValues.company = company;


    }

    setValues({ ...values, ...userValues })
  }

  const handleFormSubmit = () => {
    selectedUser ? dispatch(updateUser({ ...selectedUser, ...values })) :
      dispatch(createUser({ ...values, id: cuid() }))
    history.push("/");

  }


  return (

    <Grid centered>
      <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>

        <Segment padded clearing>
          <Header content={selectedUser ? 'Edit User' : 'Create new user'} />


          <Form onSubmit={handleFormSubmit}>
            <Form.Input required
              name="name"
              type='text'
              value={values.name}
              onChange={(e) => handleInputChange(e)}
              fluid
              label='Name'
              placeholder='Name'
              id='form-input-first-name'
            />
            <Form.Input required
              name="email"
              value={values.email}
              onChange={(e) => handleInputChange(e)}
              fluid
              type="email"
              label='Email'
              placeholder='Email'
            />
            <Form.Input

              required
              name="city"
              value={values.address.city}
              onChange={(e) => handleNestedObjectsChange(e,'address')}
              fluid
              label='City'
              placeholder='City'
            />

            <Form.Input
              required
              name="name"
              value={values.company.name}
              onChange={(e) => handleNestedObjectsChange(e,'company')}
              fluid
              label='Company Name'
              placeholder='Company Name'
            />

            <Button type='submit' fluid primary >Submit</Button>



          </Form>


        </Segment>
      </Grid.Column>

    </Grid>

  );


}
export default UserForm;