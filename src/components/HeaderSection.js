import React, {Component} from "react";
import './HeaderSection.css';


class HeaderSection extends Component {
    render() { 
        return (<div className='container' >
            <h1 className='hero-text '>150 אלף רכבים חדשים עולים לכבישי ישראל כל שנה</h1>
            <p className='secondary-text'>מדינת ישראל נמצאת במצב חירום תחבורתי. מדי שנה עולים לכביש מאות אלפי מכוניות חדשות שרק מחמירות את  בעיית הפקקים והגודש.</p>
            <p className='secondary-text'>לפי דו"ח של משרד התחבורה: בעוד 5 שנים הנהג הישראלי הממוצע ימתין כ3 שעות ביום בפקקים! האם זה העתיד שאנחנו רוצים לייצר לעצמינו ולילדנו?</p>
            </div>
        );
    }
}
 
export default HeaderSection;