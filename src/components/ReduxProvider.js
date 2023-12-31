import React, { useMemo } from 'react';
import atomize from "@quarkly/atomize";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const initialState = {
	count: 0
};

function rootReducer(state, action) {
	switch (action.type) {
		case 'INCREMENT':
			return { ...state,
				count: state.count + 1
			};

		default:
			return state;
	}
}

const ReduxProvider = ({
	children,
	...props
}) => {
	const store = useMemo(() => {
		return createStore(rootReducer, initialState);
	}, []);
	return <div {...props}>
		    
		<Provider store={store}>
			      
			{children}
			    
		</Provider>
		  
	</div>;
};

export default atomize(ReduxProvider)({
	name: "ReduxProvider",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "ReduxProvider — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});