import React, { Fragment } from 'react';
import plan from '../images/plan.jpg';
import masterPlan from '../images/masterPlan.jpg';  

export default function Page () {
   let icon =<svg xmlns="http://www.w3.org/2000/svg" width="31" height="29.725" viewBox="0 0 31 29.725">
   <g id="Group_18" data-name="Group 18" transform="translate(-783.5 -2660)">
     <line id="Line_5" data-name="Line 5" x2="28" transform="translate(785 2661.5)" fill="none" stroke="#d24827" strokeLinecap="round" strokeWidth="3"/>
     <g id="Rectangle_7" data-name="Rectangle 7" transform="translate(786.5 2661)" fill="none" stroke="#d24827" strokeLinejoin="round" strokeWidth="1">
       <rect width="25" height="18" stroke="none"/>
       <rect x="0.5" y="0.5" width="24" height="17" fill="none"/>
     </g>
     <line id="Line_6" data-name="Line 6" y2="6" transform="translate(799 2679.5)" fill="none" stroke="#d24827" strokeLinecap="square" strokeWidth="2"/>
     <line id="Line_7" data-name="Line 7" x2="14" transform="translate(792 2667)" fill="none" stroke="#707070" strokeWidth="1"/>
     <line id="Line_8" data-name="Line 8" x2="14" transform="translate(792 2670)" fill="none" stroke="#707070" strokeWidth="1"/>
     <line id="Line_9" data-name="Line 9" x2="14" transform="translate(792 2673)" fill="none" stroke="#707070" strokeWidth="1"/>
     <line id="Line_10" data-name="Line 10" x2="17" transform="translate(790.514 2688.725)" fill="none" stroke="#d24827" strokeLinecap="round" strokeWidth="2"/>
     <path id="Path_5" data-name="Path 5" d="M2419.082,2807.5l-2.759-4.293H2403.81l-2.857,4.293" transform="translate(-1611.003 -118.775)" fill="none" stroke="#d24827" strokeWidth="1"/>
   </g>
 </svg>
 ;
    return (
    <Fragment>
        <div className='grid grid--1x2 quote_background_color'>
            <div className='quote_container'>
                <div className='quote'>Никое пътуване със сто мили в час не ще ни направи по-силни, по-щастливи или по-мъдри.</div>
                <div className='author'>– Джон Ръскин, 1856</div>
            </div>
            <img className='img_plan' src={plan} alt="Cyclists visiting small village" />
        </div>
        <div className='grid grid--1x2'>
            <div className='text text_block'>
                <h2 className='heading_block'>Защо е нужен велосипеден план</h2>
                Значението на колоезденето като транспорт нараства, което налага подобряването на условията за придвижване с велосипед както в градовете така и между населените места. В различните европейски страни напредъкът по отношение на политиките за насърчаване на велотранспорт значително се различава. Не всички държави са възприели колоезденето като отделна тема, която има нужда от целенасочен подход за планиране и прилагане на политики на национално равнище. Само някои държави са дефинирали национални веломрежи, а транснационалните маршрути налагат необходимостта от координирано развитие между държавите.  Същевременно, страни, които развиват национална велосипедна политика като Австрия извеждат процеса на европейско равнище чрез инициативата за разработване на Пан-европейски мастър план за колоездене (<a href="https://thepep.unece.org/sites/default/files/2021-06/MASTERPLAN_2021-05-20-II_BF%203%20June_0.pdf" target="_blank" rel="noreferrer">The PEP Master Plan for Cycling Promotion</a>), които бе възприет във Виена на 5-ата среща на високо равнище за Транспорт, Здравеопазване и Околна среда на Икономическата комисия за Европа към ООН през май 2021 г.</div>
            <img className='img_Mplan' src={masterPlan} alt='Pan-European Master Plan for Cycling Promotion cover page'/>
        </div>
        <div className='block_offset'>
            <h2 className='heading'>Какво имаме в България</h2>
            <div className="text text_column">В България планирането и развитието на велосипедния транспорт не е застъпено на национално равнище и в страната ни не са правени опити за систематизиране на възможностите, ограниченията и перспективите за посрещане на нуждите на колоездачите освен на местното общинско равнище. С настоящия Национален велосипеден план се цели въвеждането на координиран подход на национално равнище, който да адресира подобряването на условията за придвижване с велосипед.<br />Темата за развитието на колоезденето се разполага в различни сектори на националното управление и затова не е възможно една институция да отговаря за планирането и прилагането на адекватни действия за развитие на велотранспорта. Затова със заповед на Министъра на туризма на 8 юли 2021 г. се създава на работна група с участие на представители на институциите и неправителствения сектор.</div>
        </div>
        <div className='block_offset'>
            <h2 className='heading'>Как искаме да напреднем</h2>
            <div className="text text_column">Основна задача на работната група е изготвянето и приемане на Национален велосипеден план съгласно добрите практики в партньорския обмен по международен проект ‘Policies, plans and promotion for more people cycling in the Danube Region, финансиран по програма INTERREG - Danube Transnational Program. Другата основна задача е изготвянето на насоки за планиране и създаване на мрежа от национални велосипедни маршрути, която да е свързана с националните мрежи на страните от Дунавския регион. Резултатът от тази задача е ГИС модел на Схема на национална мрежа от велосипедни маршрути, която фиксира международните велосипедни маршрути, точките на свързване на веломрежата на България със съседните Дунавски страни и предложения за трасета на национални и някои регионални маршрути. </div>
        </div>
        <div className="block_offset">
            <h2 className="section heading">Презентации от срещите на работната група</h2>
            <h3 className='date'>24 ноември 2020</h3>
            <h3 className='meeting_heading'>Въведение в планирането на велосипедни политики</h3>
            <div className="card_container">
                <a className='card_link' href="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG1/velopolitiki.pdf" target='_blank' rel="noreferrer">
                <div className="card">
                    <div className="card_content">
                        {icon}
                        <div className='card_title'>Планиране на велосипедни политики на национално ниво</div>
                        <div className='card_author'>д-р Кирил Калоянов</div>
                    </div>
                </div>
                </a>
                <a className='card_link' href="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG1/NationalDemand.pdf" target='_blank' rel="noreferrer">
                <div className="card">
                    <div className="card_content">
                        {icon}
                        <div className='card_title'>Търсене на велосипедни маршрути от български туристи</div>
                        <div className='card_author'>Здравко Василев</div>
                    </div>
                </div>
                </a>
                <a className='card_link' href="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG1/ForeignDemand.pdf" target='_blank' rel="noreferrer">
                <div className="card">
                    <div className="card_content">
                        {icon}
                        <div className='card_title'>Търсене на велосипедни маршрути от чуждестранни туристи</div>
                        <div className='card_author'>Деян Кателиев</div>
                    </div>
                </div>
                </a>
                <a className='card_link' href="http://www.baatbg.org//uploads/docs/DCP3-320-3.1/NCWG1/pravna.ramka.pdf" target='_blank' rel="noreferrer">
                <div className="card">
                    <div className="card_content">
                        {icon}
                        <div className='card_title'>Правна рамка на националния велосипеден план</div>
                        <div className='card_author'>арх. Петя Донева</div>
                    </div>
                </div>
                </a>
            </div>
            <hr />
            <h3 className='section date'>29 юни 2021</h3>
            <h3 className='meeting_heading'>Велосипедни политики в страните от Дунавския регион</h3>
            <div className="card_container">
                <a className='card_link' href="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG2/Status.pdf" target='_blank' rel="noreferrer">
                <div className="card">
                    <div className="card_content">
                        {icon}
                        <div className='card_title'>Преглед на велополитики в България и в партньорските страни</div>
                        <div className='card_author'>Радостина Петрова</div>
                    </div>
                </div>
                </a>
                <a className='card_link' href="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG2/Slovenia.pdf" target='_blank' rel="noreferrer">
                <div className="card">
                    <div className="card_content">
                        {icon}
                        <div className='card_title'>Slovenia: Cycling development in the last 10 years</div>
                        <div className='card_author'>Gregor Steklačič</div>
                    </div>
                </div>
                </a>
                <a className='card_link' href="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG2/Hungary.pdf" target='_blank' rel="noreferrer">
                <div className="card">
                    <div className="card_content">
                        {icon}
                        <div className='card_title'>Cycling governance, infrastructure, tourism and funding in Hungary</div>
                        <div className='card_author'>Miklòs Berencsi</div>
                    </div>
                </div>
                </a>
                <a className='card_link' href="http://www.baatbg.org//uploads/docs/DCP3-320-3.1/NCWG2/intr.pdf" target='_blank' rel="noreferrer">
                <div className="card">
                    <div className="card_content">
                        {icon}
                        <div className='card_title'>Национален велосипеден план</div>
                        <div className='card_author'>д-р Кирил Калоянов</div>
                    </div>
                </div>
                </a>
                <a className='card_link' href="http://www.baatbg.org//uploads/docs/DCP3-320-3.1/NCWG2/SUB.pdf" target='_blank' rel="noreferrer">
                <div className="card">
                    <div className="card_content">
                        {icon}
                        <div className='card_title'>Национална схема на велосипедни маршрути</div>
                        <div className='card_author'>Васил Маджирски</div>
                    </div>
                </div>
                </a>
            </div>
            <hr />
            <h3 className='section date'>25 ноември 2021</h3>
            <h3 className='meeting_heading'>Визия на национален велосипеден план</h3>
            <div className="card_container">
                <a className='card_link' href="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG3/BYPAD.pdf" target='_blank' rel="noreferrer">
                <div className="card">
                    <div className="card_content">
                        {icon}
                        <div className='card_title'>Одит на велосипедни политики по метода BYPAD</div>
                        <div className='card_author'>арх. Петя Донева и Радостина Петрова</div>
                    </div>
                </div>
                </a>
                <a className='card_link' href="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG3/vision.pdf" target='_blank' rel="noreferrer">
                <div className="card">
                    <div className="card_content">
                        {icon}
                        <div className='card_title'>Визия за политики за велосипеден транспорт, туризъм и спорт</div>
                        <div className='card_author'>арх. Петя Донева</div>
                    </div>
                </div>
                </a>
                <a className='card_link' href="https://www.baatbg.org/uploads/docs/DCP3-320-3.1/NCWG3/velo.pdf" target='_blank' rel="noreferrer">
                <div className="card">
                    <div className="card_content">
                        {icon}
                        <div className='card_title'>Велосипедна инфарструктура извън урбанизирани територии в България</div>
                        <div className='card_author'>Радостина Петрова</div>
                    </div>
                </div>
                </a>

            </div>
        </div>
    </Fragment>
    )
}   