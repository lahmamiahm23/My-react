import { About } from "../components/About";
import { Form } from "../Formation/Form";
import { Langue } from "../Linguistique/Langue";
import { Tech } from "../Technique/Tech";
import { Autre } from "../Autre/Autre";
import { Cpright } from "../Cpright/Cpright";
export const Home = () => {
    return (
        <div>
            <center>
                <h1 style={{
                    textAlign: 'center',
                    color: '#3498db',
                    marginBottom: '20px',
                    fontSize: '36px',
                    fontWeight: 'bold',
                }}>CV personnel</h1>
            </center>
            <About />
            <Form/>        
            <Langue/>
            <Tech/>
            <Autre/>
            <Cpright/>
        </div>
    );
};
