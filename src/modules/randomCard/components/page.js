import React, { Component } from 'react'
// UI
import styles from './Page.module.scss'
import Card from './../../layout/components/Card'

class RandomCardPage extends Component {
    render () {
        return (
            <div className={styles.content}>
                <Card
                    foil
                    img="https://i.pinimg.com/originals/15/1d/71/151d71dd0aa6713f98892080d0d00f5d.png"
                />
            </div>
        )
    }
}

export default RandomCardPage
