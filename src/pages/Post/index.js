import React from 'react';
import { ListPost } from '../../container/ListPost';
import { ListDetail } from '../../container/ListDetail';
import { Container, SectorPost, SectorDetail } from './styles'

export const Post = () => (
    <Container>
        <SectorPost>
            <ListPost />
        </SectorPost>
        <SectorDetail>
            <ListDetail />
        </SectorDetail>
    </Container>
)