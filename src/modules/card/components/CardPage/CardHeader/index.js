import React, { Component } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
// UI
import Typography from '@material-ui/core/Typography'
import styles from './CardHeader.module.scss'
import ManaCosts from '../../../../layout/components/ManaCosts'

class CardHeader extends Component {
    get manaCosts () {
        const {card} = this.props

        return get(card, 'mana_cost', get(card, 'card_faces[0].mana_cost', ''))
    }

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
                    <ManaCosts size="2x" mana={this.manaCosts}/>
                </div>
            </div>
        )
    }
}

CardHeader.propTypes = {card: PropTypes.object.isRequired}

export default CardHeader
