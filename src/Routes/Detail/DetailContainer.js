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
                const request = await moviesApi.movieDetail(parsedId);
                result = request.data;
            } else {
                const request = await tvApi.showDetail(parsedId);
                result = request.data;
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
