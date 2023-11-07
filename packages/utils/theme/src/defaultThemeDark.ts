import { createTheme } from './createTheme'
import { type Theme } from './types'

export const defaultThemeDark: Theme = createTheme({
  colors: {
    // Basic
    basic: '#DCDCE5',
    onBasic: '#1D1F2A',
    basicHovered: '#C4C5D3',
    basicPressed: '#C4C5D3',
    basicFocused: '#C4C5D3',
    // Basic Container
    basicContainer: '#4D4E7B',
    onBasicContainer: '#FFFFFF',
    basicContainerHovered: '#35376A',
    basicContainerPressed: '#35376A',
    basicContainerFocused: '#35376A',
    // Accent
    accent: '#CC99FF',
    onAccent: '#1D1F2A',
    accentHovered: '#AC7DDD',
    accentPressed: '#AC7DDD',
    accentFocused: '#AC7DDD',
    // Accent Container
    accentContainer: '#8D64BB',
    onAccentContainer: '#FFFFFF',
    accentContainerHovered: '#6E4D99',
    accentContainerPressed: '#6E4D99',
    accentContainerFocused: '#6E4D99',
    // Accent Variant
    accentVariant: '#DBB7FF',
    onAccentVariant: '#1D1F2A',
    accentVariantHovered: '#CC99FF',
    accentVariantPressed: '#CC99FF',
    accentVariantFocused: '#CC99FF',
    // Main
    main: '#3173FF',
    onMain: '#FFFFFF',
    mainHovered: '#0052FF',
    mainPressed: '#0052FF',
    mainFocused: '#0052FF',
    // Main container
    mainContainer: '#001766',
    onMainContainer: '#FFFFFF',
    mainContainerHovered: '#000A33',
    mainContainerPressed: '#000A33',
    mainContainerFocused: '#000A33',
    // Main Variant
    mainVariant: '#91B5FF',
    onMainVariant: '#1D1F2A',
    mainVariantHovered: '#6194FF',
    mainVariantPressed: '#6194FF',
    mainVariantFocused: '#6194FF',
    // Support
    support: '#DCDCE5',
    onSupport: '#1D1F2A',
    supportHovered: '#C4C5D3',
    supportPressed: '#C4C5D3',
    supportFocused: '#C4C5D3',
    // Support Container
    supportContainer: '#4D4E7B',
    onSupportContainer: '#FFFFFF',
    supportContainerHovered: '#35376A',
    supportContainerPressed: '#35376A',
    supportContainerFocused: '#35376A',
    // Support Variant
    supportVariant: '#F4F4F7',
    onSupportVariant: '#1D1F2A',
    supportVariantHovered: '#DCDCE5',
    supportVariantPressed: '#DCDCE5',
    supportVariantFocused: '#DCDCE5',
    // Success
    success: '#64BC90',
    onSuccess: '#1D1F2A',
    successHovered: '#31A56B',
    successPressed: '#31A56B',
    successFocused: '#31A56B',
    // Success container
    successContainer: '#14422B',
    onSuccessContainer: '#B7DFCB',
    successContainerHovered: '#14422B',
    successContainerPressed: '#14422B',
    successContainerFocused: '#14422B',
    // Alert
    alert: '#F7CF76',
    onAlert: '#1D1F2A',
    alertHovered: '#F4BF48',
    alertPressed: '#F4BF48',
    alertFocused: '#F4BF48',
    // Alert container
    alertContainer: '#624C1D',
    onAlertContainer: '#FFFFFF',
    alertContainerHovered: '#3D3012',
    alertContainerPressed: '#3D3012',
    alertContainerFocused: '#3D3012',
    // Error
    error: '#F8807D',
    onError: '#1D1F2A',
    errorHovered: '#F65651',
    errorPressed: '#F65651',
    errorFocused: '#F65651',
    // Error container
    errorContainer: '#622220',
    onErrorContainer: '#FFFFFF',
    errorContainerHovered: '#3E1514',
    errorContainerPressed: '#3E1514',
    errorContainerFocused: '#3E1514',
    // Info
    info: '#45B8CA',
    onInfo: '#1D1F2A',
    infoHovered: '#07A0B8',
    infoPressed: '#07A0B8',
    infoFocused: '#07A0B8',
    // Info container
    infoContainer: '#03404A',
    onInfoContainer: '#FFFFFF',
    infoContainerHovered: '#02282E',
    infoContainerPressed: '#02282E',
    infoContainerFocused: '#02282E',
    // Neutral
    neutral: '#ACADB1',
    onNeutral: '#1D1F2A',
    neutralHovered: '#94959A',
    neutralPressed: '#94959A',
    neutralFocused: '#94959A',
    // Neutral container
    neutralContainer: '#353741',
    onNeutralContainer: '#FFFFFF',
    neutralContainerHovered: '#1D1F2A',
    neutralContainerPressed: '#1D1F2A',
    neutralContainerFocused: '#1D1F2A',
    // Background
    background: '#1D1F2A',
    onBackground: '#FFFFFF',
    // Background variant
    backgroundVariant: '#000000',
    onBackgroundVariant: '#F4F4F4',
    // Surface
    surface: '#1D1F2A',
    onSurface: '#FFFFFF',
    surfaceHovered: '#000000',
    surfacePressed: '#000000',
    surfaceFocused: '#000000',
    // Surface Inverse
    surfaceInverse: '#F4F4F4',
    onSurfaceInverse: '#353741',
    surfaceInverseHovered: '#F4F4F4',
    surfaceInversePressed: '#F4F4F4',
    surfaceInverseFocused: '#F4F4F4',
    // Outline
    outline: '#4D4E57',
    outlineHigh: '#FFFFFF',
    // Overlay
    overlay: '#353741B8', // use with dim-1 opacity
    onOverlay: '#FFFFFF',
  },
})
