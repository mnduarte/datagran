import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, getDetails } from '../store/Post/action'
import { Grid } from '../components/Grid'
import { Loading } from '../components/Loading'

export const ListPost = () => {
    const {posts, loading, error} = useSelector(store => store.postReducer)
    const dispatch = useDispatch();
    
    useEffect(function () {        
        dispatch(getPosts())
    }, [])

    const onFetchDetail = (val) => {
        dispatch(getDetails(val))
        
    }

    return(
        <Fragment>        
            <Loading loading={loading} />
            {
                posts.length > 0 && <Grid 
                                            title={'Posts'}
                                            data={posts}
                                            onFetchDetail={onFetchDetail}
                                            enableHoverCell={true}
                                            enableHoverRow={false}
                                        />           
            }
        </Fragment>
    )
}

