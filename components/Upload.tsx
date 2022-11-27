import React, { useCallback, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import type { DatePickerProps } from 'antd/es/date-picker';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { ReducerType } from '../reducers';
import { SHOW_UPLOAD_DRAWER } from '../reducers/type';

const { Option } = Select;

const Upload: React.FC = () => {
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
            <Button onClick={OnClose}>Calcel</Button>
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

export default Upload;
