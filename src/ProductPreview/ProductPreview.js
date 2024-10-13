import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) => {
    // Obține ora și minutul curent, formatat cu două cifre
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return (
        <div className={classes.ProductPreview}>
            <img src={props.currentPreviewImage} alt='Product Preview' />

            {props.showHeartBeatSection ? (
                <div className={classes.HeartBeatSection}>
                    <div className={classes.Heart}>
                        <FontAwesomeIcon icon={faHeartPulse} />
                    </div>
                    <p>78</p>
                </div>
            ) : (
                <div className={classes.TimeSection}>
                    <p>{`${currentHour}:${currentMinute}`}</p>
                </div>
            )}
        </div>
    );
}

export default ProductPreview;
