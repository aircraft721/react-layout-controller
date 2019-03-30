export interface IButtonObject {
    name: string;
    display: string;
    src: string;
    isActive: boolean;
}

export interface IDefaultInputs{
    className: string;
    backgroundColor: string;
    layout: ILayout;
}

export interface ICommonAttributes {
    id?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    padding?: string;
    margin?: string;
    height?: string;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    maxHeight?: string;
    minHeight?: string;
    float?: string;
    overFlow?: string;
    position?: string;
}

export interface IBlock extends ICommonAttributes {
    display: string;
}

export interface IInline extends ICommonAttributes {
    display: string;
}

export interface IFlex extends ICommonAttributes{
    display: string;
    flexDirection: string;
    justifyContent: string;
    flexWrap: string;
    flexBasis: string;
    alignItems: string;
    alignContent: string;
    alignSelf: string;
}

export interface INone extends ICommonAttributes {
    display: string;
}

export interface ILayout {
    block: IBlock;
    inline: IInline;
    none: INone;
    flex: IFlex;
    [key: string]: any;
}

export interface ILayoutMap {
    [key: string]: any;
}

export const defaultButtonData: IButtonObject[] = [
    {
        name: 'block',
        display: 'Block',
        src: 'images/block.png',
        isActive: false
    },
    {
        name: 'inline',
        display: 'Inline',
        src: 'images/inline.png',
        isActive: false
    },
    {
        name: 'flex',
        display: 'Flex',
        src: 'images/flex.png',
        isActive: false,
    },
    {
        name: 'grid',
        display: 'Grid',
        src: 'images/grid.png',
        isActive: false
    },
    {
        name: 'none',
        display: 'None',
        src: 'images/none.png',
        isActive: false
    }
];


export const commonAttributes: ICommonAttributes = {
    paddingTop: '',
    paddingBottom: '',
    paddingLeft: '',
    paddingRight: '',
    marginTop: '',
    marginBottom: '',
    marginLeft: '',
    marginRight: '',
    padding: '',
    margin: '',
    height: '',
    width: '',
    minWidth: '',
    maxWidth: '',
    maxHeight: '',
    minHeight: '',
    float: '',
    overFlow: '',
    position: ''
}

export const defaultInputData: IDefaultInputs = {
    className: '',
    backgroundColor: '',
    layout: {
        block: {
            display: 'block',
            ...commonAttributes
        },
        inline: {
            display: 'inline',
            ...commonAttributes
        },
        none: {
            display: 'none',
            ...commonAttributes
        },
        flex: {
            display: 'flex',
            ...commonAttributes,
            flexDirection: '',
            justifyContent: '',
            flexWrap: '',
            flexBasis: '',
            alignItems: '',
            alignContent: '',
            alignSelf: '',
        },
        grid: {
            display: 'grid',
            ...commonAttributes,
        }
    }
}

export const commonLayoutData = {
    className: '',
    backgroundColor: '',
    display: '',
    ...commonAttributes
}

export interface IArrayOfHtmlElements extends ICommonAttributes {
    id?: string;
    className?: string;
    backgroundColor?: string;
    display: string;
}