import React from 'react'
import DropdownWithIcon from '../../../components/DropdownWithIcon'

import angular138 from '../../../assets/images/angular-138.png'
import angular138_2x from '../../../assets/images/angular-138@2x.png'
import angular138_3x from '../../../assets/images/angular-138@3x.png'
import react140 from '../../../assets/images/react-140.png'
import react140_2x from '../../../assets/images/react-140@2x.png'
import react140_3x from '../../../assets/images/react-140@3x.png'
import vue141 from '../../../assets/images/vue-141.png'
import vue141_2x from '../../../assets/images/vue-141@2x.png'
import vue141_3x from '../../../assets/images/vue-141@3x.png'

const AllNews = () => {

    const NewsItemList = [
        {
            name: 'Angular', defaultImage: angular138, image2x: angular138_2x, image3x: angular138_3x
        },
        {
            name: 'React', defaultImage: react140, image2x: react140_2x, image3x: react140_3x
        },
        {
            name: 'Vue', defaultImage: vue141, image2x: vue141_2x, image3x: vue141_3x
        },
    ]

    return (
        <>
            <div>
                <DropdownWithIcon 
                    options={NewsItemList}
                    defaultOption={NewsItemList[0]}
                    onChange={(selectedOption) => console.log(selectedOption)}
                />
            </div>
            <div>
            </div>
        </>
    )
}

export default AllNews

