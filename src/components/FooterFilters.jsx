import classes from './FooterFilters.module.scss'

function FooterFilters({isFirst}) {

    return (
    <>
        <div className={classes.filters}>
            <div>
                <p className={`${classes['main-text']} ${isFirst ? classes.first : ''}`}>Footer Filters</p>
            </div>
        </div>
    </>
    )
  }
  
  export default FooterFilters