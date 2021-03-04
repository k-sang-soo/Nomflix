import { moviesApi, tvApi } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
    state = {
        result: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        const {
            match: {
                params: { id },
            },
            history: { push },
            location: { pathname },
        } = this.props;

        this.isMovie = pathname.includes('/movie/');

        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push('/');
        }
        let result = null;
        try {
            if (this.isMovie) {
                ({ data: result } = await moviesApi.movieDetail(parsedId));
            } else {
                ({ data: result } = await tvApi.showDetail(parsedId));
            }
        } catch {
            this.setState({ error: 'Can`t find anything' });
        } finally {
            this.setState({ loading: false, result });
        }
    }

    render() {
        const { result, error, loading } = this.state;
        console.log(this.state);
        return <DetailPresenter result={result} error={error} loading={loading} />;
    }
}
