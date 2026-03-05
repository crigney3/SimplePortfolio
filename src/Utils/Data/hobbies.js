import { DungeonsAndDragonsImages } from '../../Media/Hobbies'

const createAlbumPhoto = (src) => {
    const image = new Image();
    image.src = src;
    return { 
        src,
        width: image.width,
        height: image.height
    }
};

const DungeonsAndDragonsData = {
    title: "Dungeons & Dragons",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt ex at tellus facilisis dapibus. In in leo ac nibh tempor blandit eu id nulla. Donec aliquet semper ante id mattis. Praesent et massa nisi. Duis porta purus nec dictum auctor. Ut facilisis commodo luctus. Etiam elit tortor, bibendum sed nunc et, posuere consectetur libero. Donec ac nibh lectus. Vestibulum tristique posuere diam, nec scelerisque neque ullamcorper at. Aliquam molestie neque nunc, in fringilla lacus dapibus lacinia. In laoreet libero mauris, a rutrum leo hendrerit id. Suspendisse semper luctus ligula malesuada laoreet. Aliquam sed dignissim urna, ut semper odio. Nunc ac consectetur leo. Pellentesque dapibus ligula leo. Mauris convallis est mauris, ut porttitor ipsum ullamcorper ut. Nullam facilisis, risus vel placerat interdum, orci est blandit arcu, a varius mauris nunc vel lectus. Morbi dapibus diam velit, vitae pellentesque enim consectetur in.",
    brandingImage: DungeonsAndDragonsImages.brandingImage,
    photos: DungeonsAndDragonsImages.gallery.map(createAlbumPhoto),
}

export const hobbyData = [
    DungeonsAndDragonsData
]