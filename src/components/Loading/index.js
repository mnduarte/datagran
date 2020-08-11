import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { StContainerLoading } from './styles'
import PropTypes from 'prop-types'

export const Loading = ({loading}) => (
        <StContainerLoading>
            {loading && <Skeleton />}
        </StContainerLoading>
)

Loading.propTypes = {
    loading: PropTypes.bool.isRequired
}