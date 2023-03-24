import React from "react";

const Contacts = () => {
    return (
        <div style={{ 'padding': '8rem 12rem 4rem 12rem', 'background': 'thistle', 'textAlign':'center' }}>
            <div>
                <h2>Contacts</h2>
                <div>
                    <p style={{ 'color': 'var(--primaryColor' }}>
                        Adress: </p> <span>Gomel</span>
                </div>
                <div>
                    <p style={{ 'color': 'var(--primaryColor' }}>
                        Telephone:</p><span>+37544 223 45 66</span>
                </div>
                <div>
                    <p style={{ 'color': 'var(--primaryColor' }}>
                        Email: </p><span>pregnant99@gmail.com</span>
                </div>
                <div>
                    <p style={{ 'color': 'var(--primaryColor' }}>
                        Instagram:</p> <span>instagram.com</span>
                </div>
                <div>
                    <p style={{ 'color': 'var(--primaryColor' }}>
                        Facebook:</p>
                    <span>facebook.com</span>
                </div>
            </div>
        </div>
    );
};


export default Contacts