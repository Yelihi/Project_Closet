import React, { useCallback, useState } from 'react';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Upload } from 'antd';
import type { DatePickerProps } from 'antd/es/date-picker';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { ReducerType } from '../reducers';
import { SHOW_UPLOAD_DRAWER, UPLOAD_IMAGES_REQUEST } from '../reducers/type';

const { Option } = Select;

const UploadClothes: React.FC = () => {
  const dispatch = useDispatch();
  const { showDrawer } = useSelector((state: ReducerType) => state.post);

  const OnClose = useCallback(() => {
    dispatch({
      type: SHOW_UPLOAD_DRAWER,
    });
  }, []);

  const OnDateChange = useCallback((value: DatePickerProps['value'], dateString: [string, string] | string) => {
    console.log('Selected Time', value);
    console.log('Formatted Selected Time', dateString);
  }, []);

  const onOK = useCallback((value: DatePickerProps['value']) => {
    console.log('onOk', value);
  }, []);

  const uploadProps = {
    // action: '/upload.do',
    multiple: false,
    data: { a: 1, b: 2 },
    headers: {
      Authorization: '$prefix $token',
    },
    onStart(file: any) {
      const imageFormData = new FormData();
      imageFormData.append('image', file);
      console.log(imageFormData);
      for (let v of imageFormData.values()) {
        // 어차피 이부분은 백엔드랑 통신하면서 맞출것임 일단 이정도만
        console.log(v);
        dispatch({
          type: UPLOAD_IMAGES_REQUEST,
          data: v,
        });
      }
    },
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Drawer
        title='Upload a new Item'
        width={720}
        onClose={OnClose}
        open={showDrawer}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={OnClose}>Cancel</Button>
            <Button onClick={OnClose} type='primary'>
              Eroll
            </Button>
          </Space>
        }
      >
        <Form layout='vertical' hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name='name' label='Item Name' rules={[{ required: true, message: '품명을 기입해주세요' }]}>
                <Input placeholder='품명을 기입해주세요' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='selector' label='Sorting' rules={[{ required: true, message: '종류를 선택해주세요' }]}>
                <Select placeholder='종류를 선택해주세요'>
                  <Option value='outer'>Outer</Option>
                  <Option value='shirt'>Shirt</Option>
                  <Option value='pant'>Pant</Option>
                  <Option value='top'>Top</Option>
                  <Option value='shoes'>Shoes</Option>
                  <Option value='muffler'>Muffler</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name='dateTime' label='Parchase Date' rules={[{ required: true, message: '구매날짜를 입력해주세요' }]}>
                <DatePicker onChange={OnDateChange} onOk={onOK} style={{ width: '100%' }} getPopupContainer={trigger => trigger.parentElement!} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='price' label='Parchase Price' rules={[{ required: true, message: '구매 가격을 입력해주세요' }]}>
                <Input type='number' placeholder='가격을 입력해주세요' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name='imageUpload'
                label='Images'
                rules={[
                  {
                    required: true,
                    message: '이미지를 넣어주세요',
                  },
                ]}
              >
                <Upload name='avatar' listType='picture-card' className='avatar-uploader' showUploadList={true} {...uploadProps}>
                  {uploadButton}
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name='description'
                label='Description'
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder='please enter url description' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default UploadClothes;
