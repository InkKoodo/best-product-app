import React, { Component } from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

class ProductProposalForm extends Component {
  state = {
    usersSuggestions: [],
  };
  render() {
    return (
      <Container>
        <LeadText>
          Place where you can suggest interest and good quality products of small or less popular
          companies, to share with other people and get to know about it more range of pepople
        </LeadText>
        <Form>
          <MainData>
            <h2>Main Data</h2>
            <MainDataTopSection>
              <TextField
                required
                id="product-name"
                label="Product Name"
                defaultValue=""
                margin="normal"
              />
              <TextField
                required
                id="product-head-img"
                label="Main Image"
                defaultValue=""
                margin="normal"
                placeholder="Paste URL"
                helperText="Add image that clearly shows what the product is"
              />
            </MainDataTopSection>
            <TextField
              required
              multiline
              id="short-sescr"
              label="Short Description"
              defaultValue=""
              margin="normal"
              helperText="Will be available in product preview"
              inputProps={{
                maxLength: 100,
              }}
            />
            <TextField
              required
              multiline
              id="full-description"
              label="Content"
              defaultValue=""
              margin="normal"
              helperText=""
            />
          </MainData>
          <ImageGallery>
            <h2>Image Gallery</h2>
            <p>
              Additional images to show more about product. Recomend to paste image url from this
              product site or other high quality site
            </p>
            <TextField
              required
              id="gallery-field"
              label="Gallery Img"
              defaultValue=""
              placeholder="Paste URL"
              margin="normal"
              helperText=""
            />
          </ImageGallery>
        </Form>
      </Container>
    );
  }
}

export default ProductProposalForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  max-width: 1200px;
  margin: 0 auto;

  & h2 {
    font-size: 35px;
    margin: 0;
  }
`;

const LeadText = styled.h1`
  font-size: 20px;
  color: #333;
  width: 100%;
  font-weight: normal;
  width: 500px;
  text-align: right;
  position: relative;
  align-self: flex-end;
  margin-right: 120px;

  :before {
    content: 'Suggest product';
    font-size: 95px;
    font-weight: 900;
    position: absolute;
    writing-mode: vertical-lr;
    white-space: nowrap;
    top: 0;
    right: -120px;
  }
`;
const Form = styled.form`
  display: flex;
  width: 70%;
  max-width: 800px;
  flex-direction: column;
`;

const MainData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 50px;
`;

const MainDataTopSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;

  & p {
    margin: 0;
    max-width: 400px;
    font-size: 14px;
  }
`;