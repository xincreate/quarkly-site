import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-dark">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text
					margin="0"
					md-margin="0px 0 20px 0"
					text-align="left"
					font="--lead"
					color="--light"
				>
					首页
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override
						slot="link"
						text-decoration="none"
						color="--light"
						padding="6px 12px"
						link-color="--light"
					/>
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
					<Override slot="link-index">
						关于
					</Override>
					<Override slot="link-404">
						项目
					</Override>
				</Menu>
			</Box>
		</Section>
		<Section
			padding="140px 0 140px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-dark"
			display="flex"
			flex-direction="column"
		>
			<Stack gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="328px" display="flex" min-width="256px">
					{"        "}
					<Image width="256px" height="256px" src="https://uploads.quarkly.io/5fd9f55804e716001efc9b9d/images/avatar%20me.jpg?v=2020-12-17T07:48:26.859Z" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text color="--light" font="--headline2">
						<Span>
							您好，我专注于用户界面设计{"\n\n"}
						</Span>
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});