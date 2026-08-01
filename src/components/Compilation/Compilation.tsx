import styled from 'styled-components';





const CompilationWrapper = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    height: 278px;
    width: 230px;
    background: #FFFFFF;
    border-radius: 16px 16px 16px 0px;
    overflow: hidden;
    gap: 2px;
    `

const CompilationTitle = styled.div`
font-family: Roboto;
font-weight: 700;
font-size: 12px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 2%;
text-align: center;
vertical-align: middle;
text-transform: uppercase;
margin: auto;
`

const CompilationItem = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 22px;
    justify-content: space-between;
    background: #F5F6FB;
    width: 186px;
    height: 38px;
`


const CompilationItemText = styled.div`
font-family: Roboto;
font-weight: 400;
font-size: 12px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 4%;
vertical-align: middle;
text-transform: uppercase;
`


export const Compilation = () => {
    return (
        <CompilationWrapper>
            <CompilationItem>
            <CompilationTitle>Зведення</CompilationTitle>
            </CompilationItem>
            <CompilationItem>
                <CompilationItemText>lorem1</CompilationItemText>
                <CompilationItemText>lorem2</CompilationItemText>
            </CompilationItem>
            <CompilationItem>
                <CompilationItemText>lorem1</CompilationItemText>
                <CompilationItemText>lorem2</CompilationItemText>
            </CompilationItem>
            <CompilationItem>
                <CompilationItemText>lorem1</CompilationItemText>
                <CompilationItemText>lorem2</CompilationItemText>
            </CompilationItem>
            <CompilationItem>
                <CompilationItemText>lorem1</CompilationItemText>
                <CompilationItemText>lorem2</CompilationItemText>
            </CompilationItem>
            <CompilationItem>
                <CompilationItemText>lorem1</CompilationItemText>
                <CompilationItemText>lorem2</CompilationItemText>
            </CompilationItem>
            <CompilationItem>
                <CompilationItemText>lorem1</CompilationItemText>
                <CompilationItemText>lorem2</CompilationItemText>
            </CompilationItem>
        </CompilationWrapper>
    );
};