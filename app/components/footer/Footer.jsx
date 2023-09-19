import Image from 'next/image';
import styles from './footer.module.css';
import { BsInstagram } from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {SiLinktree} from 'react-icons/si'
const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footercta}>
                        <div className={styles.row}>
                            <div>
                                <div className={styles.singlecta}>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className={styles.ctatext}>
                                        <h4>Endereço</h4>
                                        <span>R. Artur Fernandes Querido, 55 - Vila Santo Antonio, Valinhos - SP, 13270-530</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className={styles.singlecta}>
                                    <i className="fas fa-phone"></i>
                                    <div className={styles.ctatext}>
                                        <h4>Entre em contato</h4>
                                        <span>(19)98985-0330</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className={styles.singlecta}>
                                    <i className="far fa-envelope-open"></i>
                                    <div className={styles.ctatext}>
                                        <h4>E-mail</h4>
                                        <span>fmiotto47@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footercontent}>
                        <div className={styles.row}>
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className={styles.footerwidget}>
                                    <div className={styles.footerlogo}>
                                        <Image src={"/logo.png"} className={styles.imgfluid} width={140} height={140} alt="logo"></Image>
                                    </div>

                                    <div className={styles.footersocialicon}>
                                        <span className={styles.seguir}>Nos sigam</span>
                                        <BsInstagram color='#40b7ea' fontSize={40} />
                                        <BsTwitter color='#40b7ea' fontSize={40} />
                                        <SiLinktree color='#40b7ea' fontSize={40} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.paginas}>
                                <div className={styles.footerwidget}>
                                    <div className={styles.footerwidgetheading}>
                                        <h3>Páginas</h3>
                                    </div>
                                    <ul className={styles.pages}>
                                        <li><a href="#">Inicial</a></li>
                                        <li><a href="#">Serviços</a></li>
                                        <li><a href="#">Contato</a></li>
                                        <li><a href="#">Equipe</a></li>
                                        <li><a href="#">Categorias</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className={styles.footerwidget}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyrightarea}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className={styles.copyrighttext}>
                                    <p>© Copyright 2023 - Todos os direitos reservados.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className={styles.footermenu}>
                                    <ul>
                                        <li><a href="#">Privacidade</a></li>
                                        <li><a href="#">Politica</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;