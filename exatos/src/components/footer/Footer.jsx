import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="newsletter">
                <h3>Newsletter</h3>
                <p>Digite seu e-mail se quiser receber coleções mensais de notícias do Exatos²</p>
                <form>
                    <input type="email" name="Seu-email" placeholder="Seu e-mail" />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
            <div className="desenvolvedores">
                <p>Desenvolvido por Klayvem Guimarães e Rayssa Buarque</p>
            </div>
        </footer>
    );
}

export default Footer;
