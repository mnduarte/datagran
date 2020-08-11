import React, { Fragment } from 'react';
import { Router }  from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';
import { Layout } from './components/Layout';
import { LineGraph } from './pages/LineGraph';
import { Post } from './pages/Post';

export const App = () => (
    <Fragment>
        <GlobalStyle />
        <Layout>
          <Router primary={false}>
              <LineGraph path='/' />
              <LineGraph path='/linegraph' />
              <Post path='/post' />
          </Router>
        </Layout>
    </Fragment>
)