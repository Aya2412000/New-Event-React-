import { FormRegister, Here, Register, RegisterButton, RegisterContent, RegisterHereWrapper, RegisterInput, Text, TextTow } from './style';
export default function RegisterHere(){
    return(
        <>
            <RegisterHereWrapper>
                <div className='container'>
                    <RegisterContent>
                        <div style={{width:"60%"}}>
                            <Register>Register <Here>Here</Here></Register>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem itaque consectetur aspernatur quas</Text>
                            <TextTow>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem itaque consectetur aspernatur quasLorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem itaque consectetur aspernatur quas</TextTow>
                        </div>
                        <FormRegister style={{width:"35%"}}>
                            <RegisterInput type="text" placeholder="First Name"/>
                            <RegisterInput type="text" placeholder="Last Name"/>
                            <RegisterInput type="number" placeholder="Phone Number"/>
                            <RegisterInput type="email" placeholder="Email Address"/>
                        </FormRegister>
                    </RegisterContent>
                        <div style={{textAlign:"right"}}>
                            <RegisterButton>Register</RegisterButton>
                        </div>
                </div>
            </RegisterHereWrapper>
        </>
    )
}