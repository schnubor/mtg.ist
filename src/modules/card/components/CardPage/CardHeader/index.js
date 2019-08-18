import React, { Component } from 'react'
import PropTypes from 'prop-types'
// UI
import Typography from '@material-ui/core/Typography'
import styles from './CardHeader.module.scss'
import ManaCosts from '../../../../layout/components/ManaCosts'

class CardHeader extends Component {
    render () {
        const {card} = this.props

        return (
            <div className={styles.title}>
                <div className={styles.left}>
                    <Typography variant="h5">
                        {card.name}
                    </Typography>
                </div>
                <div className={styles.right}>
                    <ManaCosts size="2x" mana={card.mana_cost}/>
                </div>
            </div>
        )
    }
}

CardHeader.propTypes = {card: PropTypes.object.isRequired}

export default CardHeader
