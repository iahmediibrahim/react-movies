import {
	createTheme,
	responsiveFontSizes,
	Theme,
	ThemeProvider,
} from '@mui/material/styles'
import Home from '@Pages/Home'
import { useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import SystemColors from './Components/Common/SystemColors'

declare module '@mui/styles/defaultTheme' {
	interface DefaultTheme extends Theme {}
}
function App() {
	const mdTheme = useMemo(
		() =>
			responsiveFontSizes(
				createTheme({
					direction: 'ltr',
					typography: {
						fontFamily: `'Roboto','sans-serif'`,
						htmlFontSize: 10,
						fontSize: 16,
					},
					palette: {
						primary: SystemColors.primary,
						secondary: SystemColors.secondary,
					},
					breakpoints: {
						values: {
							xs: 0,
							sm: 640,
							md: 768,
							lg: 1024,
							xl: 1280,
						},
					},
					spacing: (factor: number) => `${0.25 * factor}rem`,
					components: {
						MuiListItem: {
							styleOverrides: {
								root: {
									'&$selected': {
										backgroundColor: 'red',
										'&:hover': {
											backgroundColor: 'orange',
										},
									},
								},
							},
						},
						MuiTypography: {
							styleOverrides: {
								root: {
									color: 'inherit',
									fontWeight: '500',
								},
							},
						},
						MuiButton: {
							styleOverrides: {
								// Name of the slot
								containedPrimary: {
									color: '#fff',
								},
								root: {
									borderRadius: '6px',
									textTransform: 'capitalize',
									// fontSize: '1.6rem',
								},
							},
						},
						MuiDialog: {
							styleOverrides: {
								root: {
									'& .MuiPaper-root': {
										borderRadius: '20px',
									},
								},
							},
						},
						MuiCard: {
							styleOverrides: {
								root: {
									borderRadius: '12px',
								},
							},
						},
						MuiFormControl: {
							styleOverrides: {
								root: {
									'& .MuiOutlinedInput-input': {
										padding: '12.5px 14px',
										color: '#969696',
									},
									'& .MuiInputLabel-root': {
										height: '100%',
										color: '#969696',
									},

									'& .MuiOutlinedInput-root': {
										'& fieldset': {
											borderColor: '#E2E8F0',
											color: '#969696',
										},
									},
									'& .MuiInputBase-root': {
										borderRadius: '8px',
										color: '#969696',
										backgroundColor: 'rgba(255, 255, 255, 0.1)',
									},
								},
							},
						},
						MuiCssBaseline: {
							styleOverrides: {
								'@global': {
									fontFamily: `'Roboto','sans-serif'`,
									a: {
										textDecoration: 'none',
									},
								},
							},
						},
					},
				}),
			),
		[],
	)

	return (
		<ThemeProvider theme={mdTheme}>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</ThemeProvider>
	)
}

export default App
