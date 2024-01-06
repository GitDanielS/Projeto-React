import style from './BoxG.module.css'
function BoxG(){
    return(
        <>
            <div className={style.container}>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.box}></div>                      
            </div>
        </>
    )
}
export default BoxG