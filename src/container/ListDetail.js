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

    const buildSource = {
        title: lastSelected == 'Post' ? `Detail Post ${value}` : `Detail User ${value}`,
        data: lastSelected == 'Post' ? post : user
    }

    return(
        <Fragment>        
            <Loading loading={loading} />
            {
                buildSource.data.length > 0 && <Grid
                                                    enableHoverCell={false}
                                                    enableHoverRow={true}
                                                    {...buildSource}
                                                />
            }
        </Fragment>
    )
}

