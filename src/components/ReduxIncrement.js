import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Button, Box } from "@quarkly/widgets";
import { useDispatch, useSelector } from 'react-redux';
const defaultProps = {
	"min-width": "100px",
	"min-height": "100px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "70px sans-serif",
			"children": "0"
		}
	},
	"button": {
		"kind": "Button",
		"props": {}
	}
};

const ReduxIncrement = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const dispatch = useDispatch();
	const count = useSelector(state => state.count);

	const onClick = () => {
		dispatch({
			type: 'INCREMENT'
		});
	};

	return <Box {...rest}>
		<Text {...override("text")}>
			{count}
		</Text>
		<Button {...override("button")} onClick={onClick}>
			INCREMENT
		</Button>
		{children}
	</Box>;
};

Object.assign(ReduxIncrement, { ...Box,
	defaultProps,
	overrides
});
export default ReduxIncrement;