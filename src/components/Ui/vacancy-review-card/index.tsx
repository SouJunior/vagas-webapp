import React from 'react';

import { Label } from '@components/Ui/label';

import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import type { FormDataType } from '../../../pages/JobPosting/data/FormDataType';

import { ACCESSIBILITY_CLASSES } from '@utils/accessibility';

type ReviewItem = {
  label?: string;
  value: string | string[] | React.ReactElement;
};

type VacancyReviewCardProps = {
  cardTitle: string;
  items: ReviewItem[];
  formData?: FormDataType;
  stepForEditing?: number;
};

export function VacancyReviewCard({
  cardTitle,
  items,
  formData,
  stepForEditing,
}: VacancyReviewCardProps) {
  const navigate = useNavigate();

  return (
    <div className="mb-4 flex w-full max-w-[676px] items-start justify-center rounded-2xl border border-[#DEDEDE] bg-[#FFFFFF] pb-2 pl-10 pt-6 max-[391px]:relative max-[391px]:w-[358px] max-[391px]:pl-0">
      <div className="w-[442px] pl-10 max-[391px]:max-w-[326px] max-[391px]:pl-2">
        <h2 className="mb-6 text-start text-[24px] font-medium leading-[120%] max-[391px]:text-[20px]">
          {cardTitle}
        </h2>
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            {item.label && (
              <Label
                htmlFor="companyName"
                className="mb-2 text-base font-medium leading-[1.2]"
              >
                {item.label}
              </Label>
            )}

            {item.label && (
              <p className="mb-4 break-all text-start text-base font-light leading-relaxed max-[391px]:text-base">
                {item.value}
              </p>
            )}

            {!item.label && (
              <p className="mb-4 text-start text-base font-light leading-relaxed max-[391px]:text-base">
                {item.value.map((processStep) => (
                  <p
                    key={processStep}
                    className="mb-4 break-all text-start text-base font-light leading-relaxed max-[391px]:text-base"
                  >
                    {processStep}
                  </p>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="ml-8 pr-8 text-base font-medium leading-[120%] text-[#003986] underline max-[391px]:absolute max-[391px]:left-28 max-[391px]:top-7 max-[391px]:w-full max-[391px]:max-w-[442px] max-[391px]:text-base">
        <Link
          to=""
          onClick={(e) => {
            e.preventDefault();
            navigate('/register-vacancy', {
              state: {
                formData,
                stepForEditing: stepForEditing,
              },
            });
          }}
          className={`flex-shrink-0 rounded-sm ${ACCESSIBILITY_CLASSES.focusRing}`}
          aria-label={`Voltar para o step ${stepForEditing + 1}`}
        >
          Editar
        </Link>
      </div>
    </div>
  );
}
