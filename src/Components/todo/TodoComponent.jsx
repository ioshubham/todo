import { useNavigate, useParams} from 'react-router-dom'
import { createTodoApi, reteriveTodoApi, updateTodoApi } from './api/TodoAp'
import { useAuth } from './security/AuthContext'
import { useEffect, useState } from 'react'
import { Formik,Form, Field, ErrorMessage } from 'formik'
import moment from 'moment'

export default function TodoComponent() {


    const {id} = useParams()
    const authContext = useAuth()
    const navigate = useNavigate()
    const [description , setDescription] = useState('');
    const [targetDate , setTargetDate] = useState('');

    const username = authContext.username

    useEffect(
        ()=>reteriveTodos(),
        [id]
    )

    function reteriveTodos() {
        if(id!=-1)
        {
            reteriveTodoApi(username,id)
        .then(
            response => {
               // console.log(response)
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            }

        )
        .catch(error => console.log(error))
    }
    }
    function onSubmit(values) {
       // console.log(values)
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
       // console.log(todo)
       if(id==-1) {
        createTodoApi(username,todo)
        .then(
            response => {
               console.log(response)
               navigate("/todos")
            }
    
        )
        .catch(error => console.log(error))
       }
       else 
       {
        updateTodoApi(username,id,todo)
       .then(
        response => {
           console.log(response)
           navigate("/todos")
        }

    )
    .catch(error => console.log(error))
        }
    }
    function validate(value) {
        let error ={
          //  description: 'Enter a value Description',
          //  targetDate: 'Enter a target data '
        }
        if(value.description.length<5) {
            error.description ="Enter at least 5 characters"
        }
        if(value.targetDate ==null || value.targetDate=='' || !moment(value.targetDate).isValid()) {
            error.targetDate ="Enter a target date"
        }
        //console.log(value)
        return error
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
              <Formik initialValues={{description,targetDate}}
                enableReinitialize={true} // we initlized the value as '' in state above, to show tham in form we have to reinitalize it 
                onSubmit={onSubmit}
                validate={validate}
                validateOnChange={false}
                validateOnBlur={false}
              >
                {  // function accept props as input 
                    (props) => ( // all form component are inside fieldset
                        <Form> 
                            <ErrorMessage
                            name="description"
                            component="div"
                            className='alert alert-warning'
                            />
                            <ErrorMessage
                            name="targetDate"
                            component="div"
                            className='alert alert-warning'
                            />
                            <fieldset className='form-group mt-5'>
                                <lable>Description</lable>
                                <Field type="text" className="form-control" name="description"/>
                            </fieldset>
                            <fieldset className='form-group mt-5'>
                                <lable>Target Date</lable>
                                <Field type="date" className="form-control" name="targetDate"/>
                            </fieldset>
                            <div>
                                <button className='btn btn-success mt-5' type="submit">Save</button>
                            </div>
                        </Form>
                    )
                        
                    
                }
              </Formik>
            </div>
            
        </div>
    )
}
 