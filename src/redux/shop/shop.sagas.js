import { takeEvery, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils.js';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
	yield console.log('I am fired.');
	
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		// call is the effect that invokes functions
		// we can defer the execution to saga middleware
		const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
		// put is the equivalent of dispatch
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch(error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync
	);
}