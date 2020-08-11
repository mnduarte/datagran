import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '../components/Grid'
import { Loading } from '../components/Loading'

export const ListDetail = () => {
    const {post, user, lastSelected, value, loading, error} = useSelector(store => store.postReducer)

    //If not selected any Post or User return empty
    if(!lastSelected){
        return <h2>Select Post or User</h2>
    }

    return(
        <Fragment>        
            <Loading loading={loading} />
            {
                lastSelected == 'Post'
                    ?   post.length > 0 && <Grid 
                                                title={`Detail Post ${value}`}
                                                data={post}
                                                enableHoverCell={false}
                                                enableHoverRow={true}
                                            />        
                    :   user.length > 0 && <Grid 
                                                title={`Detail User ${value}`}
                                                data={user}
                                                enableHoverCell={false}
                                                enableHoverRow={true}
                                            />
            }
        </Fragment>
    )
}

