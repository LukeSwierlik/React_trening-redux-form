import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {fetchCharactersAction, searchFilterAction} from "../reduxUtility/actions/characters";
import ViewCard from "../view/ViewCard";
import ViewSearch from "../view/ViewSearch";
import {getFilteredCharacters} from "../selectors/getFilteredCharacters";

class ListCharacters extends Component {
    componentDidMount() {
        const { fetchCharacters } = this.props;

        fetchCharacters();
    }

    handlerChange = ({ target }) => {
        const { value } = target;
        const { searchFilter } = this.props;

        searchFilter(value);
    };

    render() {
        const { results, loading } = this.props;

        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <ViewSearch onChange={this.handlerChange}/>
                        </div>
                    </div>

                    <div className={'row'}>
                        {!loading && results.map(character => (
                            <ViewCard key={character.id} character={character}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { loading, results, textFilter } = state.characters;

    return {
        loading,
        results: getFilteredCharacters(results, textFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: () => dispatch(fetchCharactersAction()),
        searchFilter: (textFilter) => dispatch(searchFilterAction(textFilter))
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ListCharacters);
